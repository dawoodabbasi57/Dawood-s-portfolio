import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ProfileImage({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;

    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  return (
    <div className={cn("relative mx-auto w-full max-w-sm", className)}>
      {/* Profile Image */}
      <div className="relative rounded-3xl bg-gradient-to-br from-primary/50 via-border to-primary/20 p-px">
        <div className="relative aspect-square overflow-hidden rounded-[calc(1.5rem-1px)] bg-card">
          {failed ? (
            <div className="bg-grid flex h-full w-full items-center justify-center">
              <div className="text-center">
                <span className="font-display text-6xl font-bold text-primary/80">
                  {personalInfo.initials}
                </span>

                <p className="mt-2 font-mono text-[11px] tracking-wide text-muted-foreground">
                  add /images/profile.jpg
                </p>
              </div>
            </div>
          ) : (
            <img
              ref={imgRef}
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              onError={() => setFailed(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}