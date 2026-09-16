import type { CollectionEntry } from 'astro:content';

export type MathNote = CollectionEntry<'mathNotes'>;

export function getMathNoteSlug(note: MathNote) {
  const id = note.id.replace(/\.md$/i, '');
  const chapter = id.match(/^chapter(\d+)$/i);

  if (chapter) return `chapter-${chapter[1]}`;
  if (/^commoninequalities(?:&)?conclusions$/i.test(id)) return 'common-inequalities';

  return id
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getMathNoteUrl(note: MathNote) {
  return `/notes/${getMathNoteSlug(note)}/`;
}

export function getMathNoteLabel(note: MathNote) {
  const chapter = note.id.match(/^chapter(\d+)/i);
  return chapter ? `第 ${chapter[1]} 章` : '专题';
}

export function sortMathNotes(notes: MathNote[]) {
  return [...notes].sort((a, b) => {
    const aChapter = Number(a.id.match(/^chapter(\d+)/i)?.[1] ?? Number.MAX_SAFE_INTEGER);
    const bChapter = Number(b.id.match(/^chapter(\d+)/i)?.[1] ?? Number.MAX_SAFE_INTEGER);
    return aChapter - bChapter || a.data.title.localeCompare(b.data.title, 'zh-CN');
  });
}
