"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  services: string[];
  image: string;
  fallbackImage: string;
  alt: string;
  url: string;
  featured: boolean;
}

const emptyTestimonial: Testimonial = { id: "", name: "", role: "", company: "", content: "", rating: 5 };
const emptyProject: Project = { id: "", title: "", category: "", summary: "", tech: [], services: [], image: "", fallbackImage: "", alt: "", url: "", featured: false };

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"testimonials" | "projects">("testimonials");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Testimonial | Project | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      if (tab === "testimonials") {
        const res = await fetch("/api/admin/testimonials");
        if (res.ok) setTestimonials(await res.json());
      } else {
        const res = await fetch("/api/admin/projects");
        if (res.ok) setProjects(await res.json());
      }
    } catch {}
  }, [tab]);

  useEffect(() => {
    if (loggedIn) fetchData();
  }, [loggedIn, fetchData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setLoggedIn(true);
      } else {
        setError("Wrong password");
      }
    } catch {
      setError("Connection error");
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      let updated: (Testimonial | Project)[];
      if (tab === "testimonials") {
        const t = editing as Testimonial;
        if (isEditing) {
          updated = testimonials.map((x) => (x.id === t.id ? t : x));
        } else {
          t.id = Date.now().toString();
          updated = [...testimonials, t];
        }
        await fetch("/api/admin/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        });
        setTestimonials(updated as Testimonial[]);
      } else {
        const p = editing as Project;
        if (isEditing) {
          updated = projects.map((x) => (x.id === p.id ? p : x));
        } else {
          p.id = Date.now().toString();
          updated = [...projects, p];
        }
        await fetch("/api/admin/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updated),
        });
        setProjects(updated as Project[]);
      }
      setEditing(null);
      setIsEditing(false);
    } catch {
      setError("Save failed");
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    if (tab === "testimonials") {
      const updated = testimonials.filter((x) => x.id !== id);
      await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      setTestimonials(updated);
    } else {
      const updated = projects.filter((x) => x.id !== id);
      await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      setProjects(updated);
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-[#111827] p-8 rounded-2xl border border-white/10 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-white mb-2">Admin Panel</h1>
          <p className="text-white/50 text-sm mb-6">Hashim Tech — Manage Content</p>
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white mb-4 focus:outline-none focus:border-blue-500"
            autoFocus
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Content Manager</h1>
            <p className="text-white/50 text-sm">Add, edit or remove testimonials and projects</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { setTab("testimonials"); setEditing(null); setIsEditing(false); }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${tab === "testimonials" ? "bg-blue-600 text-white" : "bg-white/5 text-white/60 hover:text-white"}`}
            >
              Testimonials ({testimonials.length})
            </button>
            <button
              onClick={() => { setTab("projects"); setEditing(null); setIsEditing(false); }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${tab === "projects" ? "bg-blue-600 text-white" : "bg-white/5 text-white/60 hover:text-white"}`}
            >
              Projects ({projects.length})
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 text-red-400 text-sm">
            {error}
            <button onClick={() => setError("")} className="ml-2 underline">Dismiss</button>
          </div>
        )}

        {/* Add / Edit Form */}
        {editing && (
          <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">{isEditing ? "Edit" : "Add New"} {tab === "testimonials" ? "Testimonial" : "Project"}</h2>
            {tab === "testimonials" ? (
              <TestimonialForm data={editing as Testimonial} onChange={(d) => setEditing(d)} />
            ) : (
              <ProjectForm data={editing as Project} onChange={(d) => setEditing(d)} />
            )}
            <div className="flex gap-3 mt-4">
              <button onClick={handleSave} disabled={saving} className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50">
                {saving ? "Saving..." : "Save"}
              </button>
              <button onClick={() => { setEditing(null); setIsEditing(false); }} className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* List */}
        {!editing && (
          <div className="space-y-3">
            {tab === "testimonials" && testimonials.map((t) => (
              <div key={t.id} className="bg-[#111827] p-5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold">{t.name} — {t.company}</p>
                  <p className="text-white/50 text-sm truncate">{t.content}</p>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button onClick={() => { setEditing(t); setIsEditing(true); }} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30">Edit</button>
                  <button onClick={() => handleDelete(t.id)} className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg text-sm hover:bg-red-600/30">Delete</button>
                </div>
              </div>
            ))}
            {tab === "projects" && projects.map((p) => (
              <div key={p.id} className="bg-[#111827] p-5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-semibold">{p.title}</p>
                    {p.featured && <span className="text-[10px] px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-full">Featured</span>}
                  </div>
                  <p className="text-white/50 text-sm">{p.category}</p>
                  <p className="text-white/40 text-xs truncate">{p.summary}</p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button onClick={() => { setEditing(p); setIsEditing(true); }} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-lg text-sm hover:bg-blue-600/30">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="px-3 py-1 bg-red-600/20 text-red-400 rounded-lg text-sm hover:bg-red-600/30">Delete</button>
                </div>
              </div>
            ))}
            {!editing && (
              <button
                onClick={() => {
                  setEditing(tab === "testimonials" ? { ...emptyTestimonial } : { ...emptyProject });
                  setIsEditing(false);
                }}
                className="w-full py-4 border-2 border-dashed border-white/10 rounded-xl text-white/40 hover:text-white hover:border-white/20 transition-colors"
              >
                + Add New {tab === "testimonials" ? "Testimonial" : "Project"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function TestimonialForm({ data, onChange }: { data: Testimonial; onChange: (d: Testimonial) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input placeholder="Name" value={data.name} onChange={(e) => onChange({ ...data, name: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Role (e.g. Founder)" value={data.role} onChange={(e) => onChange({ ...data, role: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Company" value={data.company} onChange={(e) => onChange({ ...data, company: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <select value={data.rating} onChange={(e) => onChange({ ...data, rating: Number(e.target.value) })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500">
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r} className="bg-gray-900">{r} Star{r !== 1 ? "s" : ""}</option>
        ))}
      </select>
      <textarea placeholder="Testimonial content..." value={data.content} onChange={(e) => onChange({ ...data, content: e.target.value })} rows={3} className="md:col-span-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 resize-none" />
    </div>
  );
}

function ProjectForm({ data, onChange }: { data: Project; onChange: (d: Project) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input placeholder="Project Title" value={data.title} onChange={(e) => onChange({ ...data, title: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Category (e.g. Healthcare · Website)" value={data.category} onChange={(e) => onChange({ ...data, category: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <textarea placeholder="Summary" value={data.summary} onChange={(e) => onChange({ ...data, summary: e.target.value })} rows={2} className="md:col-span-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 resize-none" />
      <input placeholder="Image URL" value={data.image} onChange={(e) => onChange({ ...data, image: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Fallback Image URL" value={data.fallbackImage} onChange={(e) => onChange({ ...data, fallbackImage: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Alt text" value={data.alt} onChange={(e) => onChange({ ...data, alt: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Live site URL (optional)" value={data.url} onChange={(e) => onChange({ ...data, url: e.target.value })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Tech (comma separated)" value={data.tech.join(", ")} onChange={(e) => onChange({ ...data, tech: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <input placeholder="Services (comma separated)" value={data.services.join(", ")} onChange={(e) => onChange({ ...data, services: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500" />
      <label className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white cursor-pointer">
        <input type="checkbox" checked={data.featured} onChange={(e) => onChange({ ...data, featured: e.target.checked })} className="w-4 h-4 accent-blue-600" />
        <span className="text-sm">Featured (takes full width)</span>
      </label>
    </div>
  );
}
