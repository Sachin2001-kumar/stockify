import Link from "next/link";

const FooterLink = ({ text, LinkText, href }: FooterLinkProps) => {
  return (
    <div className="text-center pt-5">
      <p className="text-sm text-gray-600">
        {text}
        {` `}
        <Link href={href} className="footer-link">
          {LinkText}
          {` `}
        </Link>
      </p>
    </div>
  );
};

export default FooterLink;
