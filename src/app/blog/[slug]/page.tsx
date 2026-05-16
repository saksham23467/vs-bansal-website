import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.category, ...post.tags],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const url = `${siteConfig.url}/blog/${slug}`;

  return (
    <article className="pb-24">
      <JsonLd
        data={[
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            url,
            datePublished: post.date,
            author: post.author,
          }),
          breadcrumbJsonLd([
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${slug}` },
          ]),
        ]}
      />
      <div className="border-b border-navy-100 bg-white py-12 dark:border-navy-800 dark:bg-navy-950 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: post.category, href: `/blog/category/${encodeURIComponent(post.category.toLowerCase())}` },
                { name: post.title, href: `/blog/${slug}` },
              ]}
            />
            <Button variant="ghost" className="mb-4 px-0" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to insights
              </Link>
            </Button>
            <div className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
              <Badge variant="navy">{post.category}</Badge>
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl dark:text-white">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-navy-600 dark:text-navy-300">{post.excerpt}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl gap-10">
          {post.toc.length > 0 && (
            <aside className="hidden w-56 shrink-0 lg:block">
              <nav aria-label="Table of contents" className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">On this page</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {post.toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                      <a href={`#${item.id}`} className="text-navy-600 hover:text-royal-600 dark:text-navy-300">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
          <div className="min-w-0 flex-1">
            <div className="prose-blog" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}>
                  <Badge variant="outline">#{tag}</Badge>
                </Link>
              ))}
            </div>
            {related.length > 0 && (
              <div className="mt-16 border-t border-navy-100 pt-10 dark:border-navy-800">
                <h2 className="text-xl font-bold text-navy-900 dark:text-white">Related articles</h2>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="font-medium text-royal-600 hover:underline">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-12 rounded-2xl bg-navy-900 p-6 text-white">
              <h3 className="font-semibold">Need help with {post.category.toLowerCase()}?</h3>
              <p className="mt-2 text-sm text-navy-300">
                Speak with {siteConfig.partners[0].name} or {siteConfig.partners[1].name} at our Delhi office.
              </p>
              <Button className="mt-4" variant="secondary" asChild>
                <Link href="/contact">Book consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
