import { LinkProps } from "@/types"
import NextLink from "next/link"

export default function Link({ href, target, children, className, isExternal = false, ...props }: LinkProps) {
  if (!href) return null

  const isExternalLink = isExternal || href.startsWith("https") || href.startsWith("//")

  const linkProps = {
    href,
    target: isExternalLink ? target || "_self" : target,
    rel: isExternalLink ? "noopener noreferrer" : undefined,
    className,
    ...props,
  }

  return <NextLink {...linkProps}>{children}</NextLink>
}

