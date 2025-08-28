import Image from "next/image";
import { LINKS } from "../constants/links";

export default function ProfileCard() {
  return (
    <div className="teal-card p-6 text-center rounded-2xl shadow-md">
      <div className="flex justify-center">
        <Image
          src="/profile.jpeg"
          alt="Aditya S. Gourishetty"
          width={192}
          height={192}
          className="rounded-full border-2 border-teal-600"
        />
      </div>

      <h2 className="mt-4 text-lg font-semibold">Aditya S. Gourishetty</h2>
      <p className="text-sm text-[var(--muted)]">
        CS Graduate Student @ Texas A&amp;M (’26) <br />
      </p>

    </div>
  );
}
