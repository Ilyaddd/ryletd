import "./main-links-panel.sass";

const MAIN_LINKS = [
  "portable",
  "activate",
  "adobe",
  "simple",
  "install",
  "keycode",
  "rts",
];

export const MainLinksPanel = () => {
  return (
    <div className="main__links_panel">
      <h3 className="main__links_panel_title">Main links</h3>
      {MAIN_LINKS.map((link, index) => (
        <a
          key={index}
          className="main__links_panel_item"
          href={`https://ryletd.ru/${link}`}
        >
          {link}
        </a>
      ))}
    </div>
  );
};
