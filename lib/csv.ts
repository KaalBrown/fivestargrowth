export function parseCsv<T extends Record<string, string>>(input: string): T[] {
  const [headerLine, ...rows] = input.trim().split(/\r?\n/);
  if (!headerLine) return [];
  const headers = headerLine.split(",").map((header) => header.trim());

  return rows.filter(Boolean).map((row) => {
    const values = row.split(",").map((value) => value.trim());
    return Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])) as T;
  });
}
