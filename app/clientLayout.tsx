"use client";

import { useRef, useEffect, useContext } from "react";
import Footer from "@/components/footer";
import { useSelectedLayoutSegment } from "next/navigation";
import { Suspense } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import PageWrapper from "@/components/page-wrapper";
import ToggleTheme from "@/components/toggle-theme";
import { saira } from "./fonts";
import Logo from "@/components/logo";

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
  const segment = useSelectedLayoutSegment();

  return (
    <main className={`${saira.className}`}>
      <div className="flex-1 flex items-center justify-between pl-2 sm:pl-8 md:pl-10 pr-[18%]">
        <Logo />
        <ToggleTheme />
      </div>
      <Suspense
        fallback={
          <ImSpinner9 className="animate-spin size-8 mx-auto my-[40dvh]" />
        }
      >
        <PageWrapper>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={segment}
              initial={initial}
              animate={animate}
              exit={exit}
              style={style}
              transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
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
