type Status = "paid" | "pending" | "draft"

export function getColorWithOpacityByStatus(status: Status) {
  const colors: Record<Status, string> = {
    paid: "bg-[#33D69F]/[.18]",
    pending: "bg-[#FF8F00]/[.18]",
    draft: "dark:bg-invoice-05/[.18] bg-[#373B53]/[.18] ",
  }

  return colors[status]
}

export function getTextColorByStatus(status: Status) {
  const colors: Record<Status, string> = {
    paid: `text-[#33D69F]`,
    pending: `text-[#FF8F00]`,
    draft: `text-[#373B53] dark:text-invoice-05`,
  }

  return colors[status]
}

export function getBgColorByStatus(status: Status) {
  const colors: Record<Status, string> = {
    paid: `bg-[#33D69F]`,
    pending: `bg-[#FF8F00]`,
    draft: `bg-[#373B53] dark:bg-invoice-05`,
  }

  return colors[status]
}