"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type CaseStudy = {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  live: boolean;
};

export default function AdminPage() {
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: "",
  });

  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const router = useRouter();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("admin-token") : null;

  useEffect(() => {
    if (!token) {
      router.push("/admin");
      return;
    }

    fetch("/api/casestudies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(setCases)
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [token]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/casestudies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ title: "", subtitle: "", description: "", image: "" });
      setShowForm(false);
      location.reload();
    } else {
      const data = await res.json();
      alert(data.error || "Submission failed");
    }
  };

  const toggleLive = async (id: string, current: boolean) => {
    setUpdatingId(id);
    await fetch(`/api/casestudies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ live: !current }),
    });
    setUpdatingId(null);
    location.reload();
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    await fetch(`/api/casestudies/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setDeletingId(null);
    location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-token");
    router.push("/admin");
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">📂 Admin Case Studies</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white cursor-pointer text-sm px-2 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-6 px-6 py-2 bg-black text-white cursor-pointer rounded hover:bg-gray-800 transition"
      >
        {showForm ? "Cancel" : "+ Add New Case Study"}
      </button>

      {showForm && (
        <div className="border border-gray-300 p-6 mb-6 bg-gray-50 shadow rounded space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL (e.g., /symphonieslife-rc.png)"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-orange-500 px-6 py-2 text-white cursor-pointer rounded hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </div>
      )}

      {loading ? (
        <p className="text-center text-gray-500 py-10">Loading case studies...</p>
      ) : (
        <ul className="space-y-4">
          {cases.map((cs) => (
            <li
              key={cs._id}
              className="border p-5 rounded shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold">{cs.title}</h2>
              <p className="text-sm text-gray-600">{cs.subtitle}</p>
              <p className="text-xs text-gray-400 italic mb-2">🔗 {cs.link}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <button
                  onClick={() => toggleLive(cs._id, cs.live)}
                  disabled={updatingId === cs._id}
                  className={`text-sm px-4 py-1 rounded font-medium transition cursor-pointer ${
                    cs.live
                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      : "bg-green-100 text-green-800 hover:bg-green-200"
                  } ${updatingId === cs._id ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {updatingId === cs._id
                    ? "Working..."
                    : cs.live
                    ? "🔕 Make Inactive"
                    : "✅ Make Active"}
                </button>

                <Link
                  href={`/admin/edit/${cs._id}`}
                  className="text-sm px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  ✏️ Edit
                </Link>

                <button
                  onClick={() => handleDelete(cs._id)}
                  disabled={deletingId === cs._id}
                  className={`text-sm px-4 py-1 cursor-pointer rounded bg-red-500 text-white hover:bg-red-600 transition ${
                    deletingId === cs._id ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {deletingId === cs._id ? "Deleting..." : "🗑️ Delete"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
