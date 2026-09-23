import { AppleIcon, PlayStoreIcon } from "@/components/common/Icons";

export function StoreButton({ platform, href, label }) {
  if (!href || href === "#") return null;

  const isPlay = platform === "play";
  const defaultLabel = isPlay ? "Play Store" : "App Store";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="store-btn"
    >
      {isPlay ? <PlayStoreIcon size={17} /> : <AppleIcon size={17} />}
      <span>{label || defaultLabel}</span>
    </a>
  );
}
