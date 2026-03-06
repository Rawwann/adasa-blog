import { FiCamera } from "react-icons/fi";

export const parseContent = (content) => {
  if (!content) return { parsedBlocks: [], toc: [] };

  const blocks = content.split("\n\n");
  const parsedBlocks = [];
  const toc = [];

  blocks.forEach((block, index) => {
    if (block.startsWith("## ")) {
      const title = block.replace("## ", "");
      const anchorId = `section-${index}`;
      toc.push({ id: anchorId, title });

      parsedBlocks.push(
        <div key={index} id={anchorId} className="mt-12 mb-4 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 justify-start">
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <FiCamera className="w-9 h-9 text-primary" />
            </div>
            {title}
          </h2>
        </div>,
      );
    } else {
      parsedBlocks.push(
        <p
          key={index}
          className="text-lg text-neutral-300 mb-6 leading-relaxed text-right"
        >
          {block}
        </p>,
      );
    }
  });

  return { parsedBlocks, toc };
};
