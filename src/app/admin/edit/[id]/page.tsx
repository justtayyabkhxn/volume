"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditCaseStudy() {
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : Array.isArray(params.id) ? params.id[0] : "";
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = typeof window !== "undefined" ? localStorage.getItem("admin-token") : null;

  useEffect(() => {
    if (!id || !token) return;

    fetch(`/api/casestudies/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized or not found");
        return res.json();
      })
      .then((data) => {
        const cs = data.caseStudy || data; 
        setFormData({
          title: cs.title,
          subtitle: cs.subtitle,
          description: cs.description,
          image: cs.image,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching case study:", err);
        setError("Could not load case study");
        router.push("/admin");
      });
  }, [id, token]);

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


  const handleSubmit = async () => {
    const res = await fetch(`/api/casestudies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Failed to update. Please check your token.");
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Edit Case Study</h1>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="text-sm bg-gray-200 hover:bg-gray-300 cursor-pointer text-black px-4 py-2 rounded"
        >
          ← Go Back
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-4">
        {/* Form Fields */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-3 py-2 border rounded"
        />
        <textarea
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full px-3 py-2 border rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 cursor-pointer px-6 py-2 text-white rounded"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
