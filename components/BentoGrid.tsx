"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Book, Code, Link2, Puzzle, Settings, Terminal, Users, Zap } from "lucide-react"
import CodeView from "./CodeView"
import { Button } from "./ui/button"
import Link from "next/link"
import { Badge } from "./ui/badge"

const ANIMATION_VARIANTS = {
   ANIMATION_VARIANTS: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
   }
}

const BentoGrid = () => {
   return (
      <div >
         <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Hero Card - Spans full width */}
            <motion.div
               className="col-span-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-50 via-purple-400 to-purple-900 px-4 sm:px-6 lg:px-8 py-6 lg:py-24"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-4  hover:translate-x-1 transition-transform">
                  <div className="relative w-full lg:w-1/2">
                     <div className="backdrop-blur-lg bg-white/20 text-gray-100 p-4 sm:p-6 md:p-8 rounded-3xl">
                        <CodeView
                           language="js"
                           code={`function Actions(props: { pullRequest: PullRequest }) {
  return (
    <ActionPanel title={props.pullRequest.id}>
      <ActionPanel.Section>
        <OpenInBrowserAction url={props.pullRequest.url} />
        <ClosePullRequestAction pullRequest={props.pullRequest} />
      </ActionPanel.Section>
      <ActionPanel.Section title="Copy">
        <CopyToClipboardAction title="Copy Number" />
        <CopyBranchAction pullRequest={props.pullRequest} />
      </ActionPanel.Section>
    </ActionPanel>
  );
}`}
                        />
                     </div>
                     <div className="absolute top-1/2 left-[11%] md:left-[25%] lg:left-1/2 lg:-translate-x-1/4 -translate-x-[10%] lg:-translate-y-1/4 translate-y-[28%] bg-gradient-to-r from-[rgba(245,245,247,0.1)] to-gray-700/30 backdrop-blur-lg w-[90%] md:w-[50%] lg:w-[65%] z-50 shadow-sm rounded-xl ml-0 lg:ml-32">
                        <div className="p-3 border-b border-gray-700">
                           <input
                              type="text"
                              placeholder="Search for action..."
                              className="w-full bg-transparent text-sm text-gray-300 outline-none"
                           />
                        </div>
                        <div className="p-2 space-y-2">
                           {["View Pull Request", "Copy Pull Request URL", "Copy Branch Name"].map((action, index) => (
                              <div
                                 key={index}
                                 className="px-3 py-2 hover:bg-purple-500/20 rounded-md flex items-center justify-between cursor-pointer"
                              >
                                 <div className="flex items-center gap-2">
                                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-200">{action}</span>
                                 </div>
                                 <div className="text-xs text-gray-100">⌘ {index + 1}</div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4 text-center lg:text-left w-full lg:w-1/2 lg:ml-20 ml-0 md:mt-0 mt-6">
                     <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                        Build what you&apos;ve always wanted
                     </h2>
                     <p className="text-base md:text-lg text-purple-200">
                        Unleash your design potential with our intuitive component library. Effortlessly customizable and seamlessly integrated, it empowers you to build pixel-perfect websites that reflect your unique vision.
                     </p>
                     <p className="text-purple-200 text-base md:text-lg">
                        Ready to create exceptional websites? Dive into our resources and start building.
                     </p>
                     <Button variant="secondary" className="bg-purple-600 hover:bg-purple-500 text-white border-0">
                        <Link href="/docs/components">Discover our component library</Link>
                     </Button>
                  </div>
               </div>
            </motion.div>
            {/* Open Source Card */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 md:col-span-2 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-8 hover:translate-x-1 transition-transform">
                  <div className="flex lg:items-center items-start justify-between lg:flex-row flex-col lg:space-x-6 space-x-0 space-y-6 lg:space-y-0">
                     <div className="max-w-[280px] sm:max-w-[320px] lg:max-w-[480px] space-y-4 ">
                        <div className="inline-flex -ml-3 h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                           <Code className="h-6 w-6 text-secondary-foreground" /> {/* Changed icon to represent code */}
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">Open Source Codebase</h3> {/* More accurate title */}
                        <p className="text-sm text-muted-foreground">
                           This codebase is freely available for anyone to use and modify without restriction.  Contribute to the project, adapt it for your own needs, or build upon it to create something entirely new.  We encourage collaboration and welcome contributions from the community.
                        </p>
                     </div>
                     <div className="relative space-y-6 ml-6">
                        <div className="absolute left-[4.8px] top-0 h-full w-[2px] bg-gray-200" />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                           <div className="h-3 w-3 rounded-full bg-green-100 z-50" />
                           <div className="bg-gray-200 px-2 py-1 rounded-full">
                              User A contributed to the project.
                           </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                           <div className="h-3 w-3 rounded-full bg-blue-100 z-50" />
                           <div className="bg-gray-200 px-2 py-1 rounded-full">
                              User B forked the repository.
                           </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                           <div className="h-3 w-3 rounded-full bg-purple-100 z-50" />
                           <div className="bg-gray-200 px-2 py-1 rounded-full">
                              User C submitted a pull request.
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
            {/* Story Card */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-4 hover:translate-x-1 transition-transform">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                     <Users className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Join Our Community</h3> {/* More direct and inviting */}
                  <p className="text-sm text-muted-foreground">
                     We're building this platform *with* our community.  Your feedback and contributions are invaluable as we strive to create the best possible developer experience.  Join us and help shape the future of Technology.
                  </p>
               </div>
            </motion.div>
            {/* New Developer Tools Card */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-4 hover:translate-x-1 transition-transform">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                     <Terminal className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Developer Tools & Resources</h3> {/* More inclusive title */}
                  <p className="text-sm text-muted-foreground">
                     Empower your development process with our suite of tools and resources.  Build, customize, and extend our platform with ease, leveraging our comprehensive APIs and developer-friendly documentation.
                  </p>
               </div>
            </motion.div>
            {/* API Documentation Card */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-4 hover:translate-x-1 transition-transform">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                     <Code className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">API Documentation & Guides</h3> {/* More descriptive title */}
                  <p className="text-sm text-muted-foreground">
                     Dive into our comprehensive API documentation, complete with practical examples and step-by-step guides.  Stay up-to-date with the latest trends and best practices through our blog, featuring insights on.
                  </p>
                  <div className="flex gap-2 text-sm  ">
                     <Link href={"blog/web-design"} passHref >
                        <Badge variant={"default"}>Web design</Badge>
                     </Link>
                     <Link href={"blog/web-development"} passHref>
                        <Badge variant={"default"}>Web Development</Badge>
                     </Link>
                  </div>
               </div>
            </motion.div>
            {/* Integration Hub Card */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-4 hover:translate-x-1 transition-transform">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                     <Puzzle className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Integration Hub</h3>
                  <p className="text-sm text-muted-foreground">
                     Connect and integrate with your favorite tools and services seamlessly.
                  </p>
               </div>
            </motion.div>
            {/* Settings Card */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-4 hover:translate-x-1 transition-transform">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                     <Settings className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Advanced Settings</h3>
                  <p className="text-sm text-muted-foreground">
                     Customize and configure your development environment to match your workflow.
                  </p>
               </div>
            </motion.div>
            {/* Performance Metrics Card - Spans 2 columns */}
            <motion.div
               className="group relative overflow-hidden rounded-xl bg-card p-8 md:col-span-2 bg-gray-50"
               variants={ANIMATION_VARIANTS}
               initial="initial"
               animate="animate"
            >
               <div className="space-y-4 hover:translate-x-1 transition-transform">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                     <Zap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">Boost Your Productivity</h3> {/* More benefit-oriented title */}
                  <p className="text-sm text-muted-foreground">
                     Save valuable development time and resources by leveraging our pre-built components.  Focus on what matters most – building exceptional user experiences – while we handle the foundational elements.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                     <div className="rounded-lg bg-secondary p-4">
                        <p className="text-2xl font-bold text-secondary-foreground">Up to 50%</p> {/* Example time savings */}
                        <p className="text-xs text-muted-foreground">Faster Development</p> {/* Clearer label */}
                     </div>
                     <div className="rounded-lg bg-secondary p-4">
                        <p className="text-2xl font-bold text-secondary-foreground">Weeks</p> {/* Unit of time saved */}
                        <p className="text-xs text-muted-foreground">Saved on Initial Setup</p> {/* More specific benefit */}
                     </div>
                     <div className="rounded-lg bg-secondary p-4">
                        <p className="text-2xl font-bold text-secondary-foreground">Reduced</p>  {/* More appropriate word */}
                        <p className="text-xs text-muted-foreground">Maintenance Overhead</p> {/* Benefit related to maintenance */}
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
   )
}

export default BentoGrid

