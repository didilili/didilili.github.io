import { Card, Checkbox, Select } from "animal-island-ui";
import { useMemo, useState } from "react";
import { notes, type NotePreview } from "../data/profile";

type NoteStatusFilter = "all" | NotePreview["status"];
type NoteCategory = NotePreview["category"];

const statusLabels: Record<NotePreview["status"], string> = {
  drafting: "正在写",
  idea: "灵感瓶",
  "coming soon": "等海风",
};

const categoryLabels: Record<NoteCategory, string> = {
  tutorial: "教程航线",
  experiment: "实验手账",
  frontend: "前端旧船票",
};

const noteCategories = Object.keys(categoryLabels) as NoteCategory[];

export function NotesPreview() {
  const [statusFilter, setStatusFilter] = useState<NoteStatusFilter>("all");
  const [categoryFilter, setCategoryFilter] =
    useState<NoteCategory[]>(noteCategories);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      const matchesStatus =
        statusFilter === "all" || note.status === statusFilter;
      const matchesCategory = categoryFilter.includes(note.category);

      return matchesStatus && matchesCategory;
    });
  }, [categoryFilter, statusFilter]);

  return (
    <section className="content-section" id="notes">
      <div className="section-heading-center">
        <p className="section-kicker">Notes</p>
        <h2>还没长大的漂流瓶笔记</h2>
        <p>把瓶中信按潮汐和贝壳分类，捞起你此刻想看的那一种。</p>
      </div>
      <div className="bottle-filter-bar">
        <label className="filter-field">
          <span>潮汐状态</span>
          <Select
            value={statusFilter}
            onChange={(key) => setStatusFilter(key as NoteStatusFilter)}
            options={[
              { key: "all", label: "全部漂流瓶" },
              { key: "drafting", label: statusLabels.drafting },
              { key: "idea", label: statusLabels.idea },
              { key: "coming soon", label: statusLabels["coming soon"] },
            ]}
          />
        </label>
        <div className="filter-field filter-field-wide">
          <span>贝壳标签</span>
          <Checkbox
            value={categoryFilter}
            onChange={(values) => setCategoryFilter(values as NoteCategory[])}
            options={noteCategories.map((category) => ({
              label: categoryLabels[category],
              value: category,
            }))}
          />
        </div>
      </div>
      <div className="note-grid">
        {filteredNotes.map((note) => (
          <Card key={note.title} type="dashed">
            <div className="note-badges">
              <span className="note-status">{statusLabels[note.status]}</span>
              <span className="note-category">
                {categoryLabels[note.category]}
              </span>
            </div>
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
          </Card>
        ))}
      </div>
      {filteredNotes.length === 0 ? (
        <Card type="dashed" className="empty-bottle-card">
          这片海滩暂时没有漂流瓶。换一阵海风，再捞一次。
        </Card>
      ) : null}
    </section>
  );
}
