export interface EventItem {
  id: string;
  category: "travel" | "course" | "service" | "activity";
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  slots: number;
  maxSlots: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: "travel" | "course" | "party" | "singing" | "service" | "exhibition" | "video";
  title: string;
  image: string;
  date: string;
  description?: string;
  isVideo?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string[];
  image?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
