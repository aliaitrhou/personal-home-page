"use client";

import { useRef, useEffect, useContext } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Suspense } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import PageWrapper from "@/components/page-wrapper";

// While i was working on the pages transition animation
// i found that the exit animation is not working as expected which was related to nextjs app router
// after some time i found an article that helped me to solve this issue
// you can find more about this here:
// https://www.imcorfitz.com/posts/adding-framer-motion-page-transitions-to-next-js-app-router?utm_source=chatgpt.com

function usePreviousValue<T>(value: T): T | undefined {
  const prevValue = useRef<T | undefined>(undefined);

  useEffect(() => {
    prevValue.current = value;
    return () => {
      prevValue.current = undefined;
    };
  }, [value]);

  return prevValue.current;
}

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const prevContext = usePreviousValue(context) || null;

  const segment = useSelectedLayoutSegment();
  const prevSegment = usePreviousValue(segment);

  const changed =
    segment !== prevSegment &&
    segment !== undefined &&
    prevSegment !== undefined;

  return (
    <LayoutRouterContext.Provider value={changed ? prevContext : context}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

interface clientLayoutProps {
  children: React.ReactNode;
  className?: React.ComponentProps<typeof motion.div>["className"];
  style?: React.ComponentProps<typeof motion.div>["style"];
  initial: React.ComponentProps<typeof motion.div>["initial"];
  animate: React.ComponentProps<typeof motion.div>["animate"];
  exit: React.ComponentProps<typeof motion.div>["exit"];
}

export default function ClientLayout({
  children,
  className,
  style,
  initial,
  animate,
  exit,
}: clientLayoutProps) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  const pagesStatus = [
    {
      title: "To My Website",
      path: "/",
    },
    {
      title: "To My Portflio",
      path: "/projects",
    },
    {
      title: "To Journey Awards",
      path: "/certificates",
    },
    {
      title: "Connect with Me",
      keyword: "feel free To",
      path: "/contact",
    },
  ];

  const page = pagesStatus.find((s) => s.path === pathname);
  const title = page ? page.title : "";
  const keyword = page ? page?.keyword : "";

  return (
    <main>
      <Navbar url={pathname} />
      <Suspense
        fallback={
          <ImSpinner9 className="animate-spin size-8 mx-auto my-[40dvh]" />
        }
      >
        <PageWrapper classNames="relative" title={title} keyword={keyword}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={segment}
              initial={initial}
              animate={animate}
              exit={exit}
              style={style}
              transition={{ duration: 0.4, type: "easeInOut" }}
              className={className}
            >
              <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
          </AnimatePresence>
        </PageWrapper>
      </Suspense>
      <Footer />
    </main>
  );
}
