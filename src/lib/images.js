// Finds any image in src/assets/images whose file name matches a slot key.
// Drop "hero.jpg" (or .jpeg .png .webp .avif .svg) in that folder and the
// matching placeholder card is replaced automatically.
const files = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byName = {};
for (const [path, url] of Object.entries(files)) {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '');
  byName[name] = url;
}

export const getImage = (name) => byName[name] ?? null;
