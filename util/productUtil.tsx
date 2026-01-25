//Only show two decimals and charge them with that, they can keep the change ;)
export const getPriceFormatted = (price: number): string => `$${price.toFixed(2)}`