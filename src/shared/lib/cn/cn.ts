export type Mods = Record<string, string | boolean>

export function cn(
	cls: string,
	mods: Mods,
	additional: Array<string | undefined> = [],
): string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.keys(mods).filter((key) => Boolean(mods[key])),
	].join(' ')
}
