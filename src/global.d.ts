type Theme = "system" | "light" | "dark";

interface Post {
  slug: string;
  title: string;
  date: DateConstructor;
  description: string;
  content: ConstructorOfATypedSvelteComponent;
  tags?: string[];
}

interface LayoutData {
  pathname: string;
}
