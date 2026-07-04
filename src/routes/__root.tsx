import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-6 font-display text-6xl">Page introuvable</h1>
        <p className="mt-4 text-muted-foreground">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary mt-10">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Une erreur est survenue</p>
        <h1 className="mt-6 font-display text-4xl">Cette page n'a pas pu se charger</h1>
        <p className="mt-4 text-muted-foreground">
          Réessayez ou revenez à l'accueil du site.
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Réessayer
          </button>
          <a href="/" className="btn-ghost">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lumière Architecture — Cabinet d'architecture contemporain" },
      {
        name: "description",
        content:
          "Lumière Architecture — cabinet d'architecture contemporain à Paris. Résidentiel, tertiaire, design d'intérieur et rénovation sur mesure.",
      },
      { name: "author", content: "Lumière Architecture" },
      { property: "og:site_name", content: "Lumière Architecture" },
      { property: "og:title", content: "Lumière Architecture" },
      { property: "og:description", content: "Nous concevons des espaces qui inspirent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
