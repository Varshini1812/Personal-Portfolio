import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    Calendar,
    ArrowRight,
    BookOpen,
    User,
    Clock,
    Share2,
    Bookmark
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const blogPosts = [
    {
        title: "The Future of Database Management",
        description: "Exploring the shift from traditional SQL to modern distributed databases and the impact on scalability.",
        image: "/images/blog/database.png",
        content: `
      <p>The landscape of database management is undergoing a seismic shift. For decades, Relational Database Management Systems (RDBMS) like MySQL and PostgreSQL have been the bedrock of enterprise applications. However, as global data volumes explode and the need for high availability becomes non-negotiable, a new generation of distributed databases is emerging.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">The Rise of NewSQL</h3>
      <p>NewSQL databases attempt to provide the scalability of NoSQL systems while maintaining the ACID guarantees of traditional databases. Systems like CockroachDB and TiDB are leading this charge, allowing developers to scale horizontally without sacrificing consistency.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Serverless Databases</h3>
      <p>The move towards serverless architecture is also impacting the database layer. With offerings like AWS Aurora Serverless and PlanetScale, developers no longer need to manage instances or worry about provisioning. The database automatically scales based on demand, reducing both operational overhead and costs.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Conclusion</h3>
      <p>As we look forward, the boundaries between different database types are blurring. The "future" isn't about choosing SQL vs NoSQL, but about choosing the right tool for the specific access pattern, often utilizing a multi-model approach within the same ecosystem.</p>
    `,
        date: "Sept 15, 2025",
        category: "Databases",
        readTime: "5 min read",
        author: "Varshini S"
    },
    {
        title: "Building Scalable APIs with Node.js",
        description: "Best practices for designing and implementing robust, high-performance APIs for modern web applications.",
        image: "/images/blog/apis.png",
        content: `
      <p>Node.js has become the de-facto standard for building fast, scalable network applications. But building an API that can handle thousands of concurrent requests requires more than just NPM install express. It requires careful architectural decisions.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Asynchronous Programming Patterns</h3>
      <p>The non-blocking I/O model is Node's greatest strength. Leveraging Async/Await properly ensures that your application remains responsive under heavy load. Avoid long-running synchronous operations that can block the event loop.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Scalability Strategies</h3>
      <p>To truly scale, you must look beyond a single process. Using the Cluster module or deploying as containerized microservices behind a load balancer (like Nginx) allows you to utilize all available CPU cores. Implementing caching layers with Redis can significantly reduce database load.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Security and Validation</h3>
      <p>Always validate input using libraries like Zod or Joi. Implementing rate limiting and using security headers via Helmet are essential steps for any production-ready API.</p>
    `,
        date: "Nov 28, 2025",
        category: "Backend",
        readTime: "8 min read",
        author: "Varshini S"
    },
    {
        title: "Mastering React Performance",
        description: "Deep dive into React's rendering lifecycle and how to optimize your components for maximum speed.",
        image: "/images/blog/react.png",
        content: `
      <p>React is fast by default, but complex applications can still suffer from performance bottlenecks. Understanding how and when React re-renders is key to keeping your UI buttery smooth.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Optimizing Re-renders</h3>
      <p>Use React.memo carefully. While it can prevent unnecessary renders of child components, overusing it can actually slow down your app due to the overhead of prop comparison. Identify components that truly need memoization through the React DevTools Profiler.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Effective Hook Usage</h3>
      <p>useMemo and useCallback are powerful tools for stabilizing values and functions across renders. They are particularly useful when passing callbacks to memoized components or including dependencies in other hooks.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Code Splitting</h3>
      <p>Reducing your initial bundle size is one of the most effective ways to improve perceived performance. Use React.lazy and Suspense to load components only when they are needed.</p>
    `,
        date: "Dec 12, 2025",
        category: "Frontend",
        readTime: "6 min read",
        author: "Varshini S"
    }
];

export const Blog = () => {
    const handleShare = async (post: typeof blogPosts[0]) => {
        const shareData = {
            title: post.title,
            text: post.description,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                toast.success("Shared successfully!");
            } else {
                await navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied to clipboard!");
            }
        } catch (err) {
            if ((err as Error).name !== 'AbortError') {
                console.error("Error sharing:", err);
                toast.error("Failed to share.");
            }
        }
    };

    return (
        <section className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-3">
                            <BookOpen className="h-10 w-10 text-blue-600" />
                            Latest Articles
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Sharing my thoughts and discoveries in the world of software development and database architecture.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex border-blue-600/30 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full">
                        View All Posts
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Dialog key={index}>
                            <Card className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full rounded-2xl">
                                <CardHeader className="p-0 overflow-hidden relative h-56 flex items-center justify-center">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-4 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600 shadow-sm border border-blue-100 dark:border-blue-900">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-10">
                                        <button className="p-2 bg-white/50 dark:bg-gray-800/50 rounded-full text-blue-600 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg">
                                            <Bookmark size={16} />
                                        </button>
                                    </div>
                                </CardHeader>
                                <CardContent className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="h-3.5 w-3.5" />
                                            {post.date}
                                        </div>
                                        <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full" />
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="h-3.5 w-3.5" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed flex-1">
                                        {post.description}
                                    </CardDescription>

                                    <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" className="p-0 h-auto font-bold text-blue-600 hover:text-blue-700 hover:bg-transparent group/btn transition-all">
                                                Read Full Article <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                            </Button>
                                        </DialogTrigger>
                                        <button
                                            onClick={() => handleShare(post)}
                                            className="text-gray-400 hover:text-blue-600 transition-colors"
                                        >
                                            <Share2 size={18} />
                                        </button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Full Article Modal */}
                            <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col p-0 border-none bg-white dark:bg-gray-950 rounded-2xl shadow-2xl">
                                <div className="h-64 relative flex items-center justify-center overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full p-8">
                                        <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-3 inline-block">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                                    <DialogHeader className="mb-10">
                                        <div className="flex items-center gap-6 mb-8 text-sm text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                                    <User size={16} />
                                                </div>
                                                <span className="font-semibold text-gray-900 dark:text-gray-200">{post.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <DialogTitle className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
                                            {post.title}
                                        </DialogTitle>
                                        <DialogDescription className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 italic font-medium leading-relaxed border-l-4 border-blue-600 pl-6">
                                            {post.description}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-loose space-y-6"
                                        dangerouslySetInnerHTML={{ __html: post.content }} />

                                    <div className="mt-16 pt-8 border-t dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-3">
                                            <p className="text-sm font-bold dark:text-white">Enjoyed the article?</p>
                                            <div className="flex gap-2">
                                                <Button
                                                    onClick={() => handleShare(post)}
                                                    size="sm"
                                                    variant="outline"
                                                    className="rounded-full gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                >
                                                    <Share2 size={14} /> Share
                                                </Button>
                                                <Button size="sm" variant="outline" className="rounded-full gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                                                    <Bookmark size={14} /> Save
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Button variant="outline" className="w-full py-6 rounded-xl border-blue-600/30 text-blue-600 font-bold hover:bg-blue-50">
                        View All Posts
                    </Button>
                </div>
            </div>
        </section>
    );
};
