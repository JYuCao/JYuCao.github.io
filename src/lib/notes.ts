import type { CollectionEntry } from 'astro:content';

export const NOTE_SUBJECTS = {
  math: {
    title: '数学笔记',
    shortTitle: '数学',
    eyebrow: 'MATH NOTES',
    description: '高等数学章节、公式与常用结论。',
    detailDescription: '交互式数学思维导图与 Markdown 笔记。',
  },
  cn: {
    title: '计算机网络',
    shortTitle: '计网',
    eyebrow: 'COMPUTER NETWORKS',
    description: '从体系结构到应用层的计算机网络知识体系。',
    detailDescription: '交互式计算机网络思维导图与 Markdown 笔记。',
  },
  os: {
    title: '操作系统',
    shortTitle: '操作系统',
    eyebrow: 'OPERATING SYSTEMS',
    description: '进程、存储、文件、I/O 与系统安全等核心内容。',
    detailDescription: '交互式操作系统思维导图与 Markdown 笔记。',
  },
} as const;

export type NoteSubject = keyof typeof NOTE_SUBJECTS;
export type Note = CollectionEntry<'notes'>;

export function isNoteSubject(value: string): value is NoteSubject {
  return value in NOTE_SUBJECTS;
}

export function getNoteSubject(note: Note): NoteSubject {
  const subject = note.id.split('/')[0];
  if (!isNoteSubject(subject)) throw new Error(`未知笔记分类：${subject}`);
  return subject;
}

function getNoteBaseName(note: Note) {
  return note.id.split('/').at(-1)!.replace(/\.md$/i, '');
}

export function getNoteSlug(note: Note) {
  if (note.data.route) return note.data.route;

  const id = getNoteBaseName(note);
  const chapter = id.match(/^chapter(\d+)$/i);
  if (chapter) return `chapter-${chapter[1]}`;
  if (/^commoninequalities(?:&)?conclusions$/i.test(id)) return 'common-inequalities';
  if (/^os2$/i.test(id)) return 'outline-2';
  if (/^os$/i.test(id)) return 'outline-1';

  return id
    .toLowerCase()
    .replace(/[^a-z0-9\u3400-\u9fff]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getNoteUrl(note: Note) {
  return `/notes/${getNoteSubject(note)}/${getNoteSlug(note)}/`;
}

export function getSubjectUrl(subject: NoteSubject) {
  return `/notes/${subject}/`;
}

export function getNoteLabel(note: Note) {
  if (note.data.label) return note.data.label;

  const id = getNoteBaseName(note);
  const chapter = id.match(/^chapter(\d+)/i);
  if (chapter) return `第 ${chapter[1]} 章`;
  if (/^os2$/i.test(id)) return '大纲 · 2';
  if (/^os$/i.test(id)) return '大纲 · 1';
  return '专题';
}

function getDefaultOrder(note: Note) {
  const id = getNoteBaseName(note);
  const chapter = id.match(/^chapter(\d+)/i);
  if (chapter) return Number(chapter[1]);
  if (/^os$/i.test(id)) return -2;
  if (/^os2$/i.test(id)) return -1;
  return Number.MAX_SAFE_INTEGER;
}

export function sortNotes(notes: Note[]) {
  return [...notes].sort((a, b) => {
    const order = (a.data.order ?? getDefaultOrder(a)) - (b.data.order ?? getDefaultOrder(b));
    return order || a.data.title.localeCompare(b.data.title, 'zh-CN');
  });
}

export function getNotesBySubject(notes: Note[], subject: NoteSubject) {
  return sortNotes(notes.filter((note) => getNoteSubject(note) === subject));
}
