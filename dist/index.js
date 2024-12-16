import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';

function n(...i) {
  const t = [];
  for (const r of i)
    if (typeof r == "object" && r !== null && !Array.isArray(r)) {
      const e = [];
      for (const s in r)
        r[s] && e.push(s);
      e.length > 0 && t.push(e.join(" "));
    } else if (typeof r == "string")
      r.trim() !== "" && t.push(r);
    else if (Array.isArray(r)) {
      if (r.length === 0) continue;
      t.push(n(...r));
    }
  return t.length === 0 ? "" : t.join(" ").trim();
}

const Index = () => {
  const contentRef = useRef(null);
  const activeRef = useRef(false);
  const boxClickHandler = () => {
    if (activeRef.current) {
      return;
    }
    activeRef.current = true;
    let transitionFlag = true;
    let contentDom = contentRef.current;
    contentDom.addEventListener("webkitTransitionEnd", function(e) {
      if (e.target === e.currentTarget && transitionFlag) {
        transitionFlag = false;
        removeListener();
      }
    });
  };
  const removeListener = () => {
    contentRef.current.removeEventListener("webkitTransitionEnd", removeListener);
  };
  useEffect(() => {
    return () => {
      removeListener();
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "nutbig-giftBox nutbig-giftBox_wrapper", children: /* @__PURE__ */ jsxs("div", { className: "nutbig-giftBox_content", ref: contentRef, onClick: boxClickHandler, children: [
    /* @__PURE__ */ jsx("div", { className: n("nutbig-giftBox_cover", {
      "nutbig-giftBox_cover--active": activeRef.current
    }) }),
    /* @__PURE__ */ jsx("div", { className: "nutbig-giftBox_box" }),
    /* @__PURE__ */ jsx("div", { className: n("nutbig-giftBox_line", {
      "nutbig-giftBox_line--active": activeRef.current
    }) })
  ] }) }) });
};

export { Index as GiftBox };
