/* ----------------------------------
        Book States Type
------------------------------------*/
export interface GroupType {
  id: number;
  name: string;
}

export interface ChapterType {
  id: number;
  name: string;
  groups: GroupType[];
}

export interface BookType {
  id: number;
  name: string;
  isPublished: boolean;
  totalChapters: number;
  totalGroups: number;
  createdAt: string;
  updatedAt: string;
  chapters: ChapterType[];
}

export interface BookState {
  book: BookType;
  loading: boolean;
  error: string | null;
}

/* ----------------------------------
        Book States Type
------------------------------------*/
export interface InfoType {
  type: string;
  content: string;
}

export interface QuestionType {
  id: number;
  answer: number;
  info: InfoType;
}

export interface GroupOptionType {
  id: number;
  name: string;
  options: string[];
  questions: QuestionType[];
}

export interface GroupState {
  group: GroupOptionType;
  loading: boolean;
  error: string | null;
}
