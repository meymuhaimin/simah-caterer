import React, { useState, useEffect } from "react";
import "./Menu.css";

const MENUS = [
  {
    name: "Ayam Masak Merah",
    description:
      'Ayam Masak Merah is a Malaysian dish, it is a casserole of chicken pieces in dried chillies sambal.".',
    tags: ["chicken", "spicy", "main dish"],
    gallery: [
      "././menu-image/ayam-masak-merah2.jpeg",
      "././menu-image/ayam-masak-merah.jpeg",
    ],
  },
  // {
  //   name: "Kari Daging",
  //   description:
  //     'Kari Daging is a Malaysian dish. It is essentially beef in a spicy curry sauce. The name literally means "beef curry".',
  //   tags: ["beef", "spicy", "main dish"],
  //   gallery: [],
  // },
  {
    name: "Daging Masak Hitam",
    description:
      'Daging masak hitam, also known as blackened meat, it is characterized by its dark, flavorful sauce and tender chunks of meat.".',
    tags: ["beef", "main dish"],
    gallery: [
      "././menu-image/daging-masak-hitam2.jpeg",
      "././menu-image/daging-masak-hitam.jpeg",
    ],
  },
  {
    name: "Acar Mentah",
    description:
      "Acar Mentah is a refreshing and tangy side dish made from a combination of thinly sliced or shredded raw vegetables and a sweet and sour marinade..",
    tags: ["salad"],
    gallery: ["././menu-image/acar-mentah.jpeg"],
  },
  {
    name: "Kerabu Umbut",
    description:
      "Kerabu umbut is a traditional Malaysian salad made with the inner core of the palm tree, known as umbut or palm shoot. It is a refreshing and tangy dish that combines the crunchiness of the palm shoot with a vibrant mix of herbs, spices, and a tangy dressing.",
    tags: ["salad", "traditional", "signature"],
    gallery: ["././menu-image/kerabu-umbut.jpeg"],
  },
  {
    name: "Kari Kambing",
    description:
      "Kari Kambing also known as mutton curry, is a flavorful and aromatic dish that is popular in Malaysian, Indian, and Pakistani cuisines. It is a curry dish made with tender pieces of lamb or mutton cooked in a spiced gravy.",
    tags: ["lamb", "aqiqah", "main dish"],
    gallery: ["././menu-image/kari-kambing.jpeg"],
  },
  {
    name: "Kari Ayam",
    description:
      "Popular dish in Malaysian, Indian, and Southeast Asian cuisines. It is a flavorful and aromatic curry made with chicken and a blend of spices and herbs.",
    tags: ["chicken", "spicy", "main dish"],
    gallery: ["././menu-image/kari-ayam.jpeg"],
  },
  {
    name: "Ayam Goreng Berempah",
    description:
      'Ayam goreng berempah is a popular Malaysian dish that translates to "spiced fried chicken." It is a flavorful and crispy fried chicken dish that is seasoned with a blend of aromatic spices.',
    tags: ["chicken", "main dish"],
    gallery: ["././menu-image/ayam-goreng-berempah.jpeg"],
  },
  {
    name: "Pajeri Nenas",
    description:
      "Pajeri Nenas is a traditional Malaysian dish that combines the sweetness of pineapple with a savory and mildly spiced curry sauce..",
    tags: ["pineapple", "salad", "side dish"],
    gallery: ["././menu-image/pajeri-nenas.jpeg"],
  },
  {
    name: "Gulai Nangka",
    description:
      "Gulai Nangka also known as jackfruit curry in coconut milk, is a delicious and creamy curry dish that is popular in Indonesian and Malaysian cuisines. It features tender chunks of young jackfruit cooked in a rich and aromatic coconut milk-based sauce.",
    tags: ["jackfruit", "spicy", "main dish"],
    gallery: ["././menu-image/gulai-nangka.jpeg"],
  },
  {
    name: "Gulai Terung Ikan Masin",
    description:
      "Gulai terung ikan masin is a traditional Malaysian dish that combines brinjal (eggplant) and ikan masin (salted fish) in a rich and flavorful curry. ",
    tags: ["eggplant", "spicy", "main dish"],
    gallery: ["././menu-image/gulai-terung-ikan-masin.jpeg"],
  },
];

const MenuCard = ({ name, picture, description }) => (
  <div className="card">
    <img src={picture} alt={name} />
    <div className="intro">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const MenuCardList = ({ menus }) => {
  const [checkedTags, setCheckedTags] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const allTags = Array.from(new Set(menus.flatMap((menu) => menu.tags)));
    setCheckedTags(allTags);
  }, [menus]);

  const handleTagChange = (tag, isChecked) => {
    if (isChecked) {
      setCheckedTags([...checkedTags, tag]);
    } else {
      setCheckedTags(checkedTags.filter((checkedTag) => checkedTag !== tag));
    }
  };

  const filteredMenus = menus.filter((menu) =>
    checkedTags.some((tag) => menu.tags.includes(tag))
  );

  return (
    <div>
      <div className="filter-container">
        <button onClick={toggleFilter}>Filter</button>
        <div className={`tags ${showFilter ? "close" : ""}`}>
          {Array.from(new Set(menus.flatMap((menu) => menu.tags))).map(
            (tag) => (
              <label key={tag}>
                <input
                  type="checkbox"
                  checked={checkedTags.includes(tag)}
                  onChange={(e) => handleTagChange(tag, e.target.checked)}
                />
                {tag}
              </label>
            )
          )}
        </div>
      </div>
      <div className="menu-cards">
        {filteredMenus.map((menu, index) => (
          <MenuCard
            key={index}
            name={menu.name}
            picture={menu.gallery[0]}
            description={menu.description}
          />
        ))}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <MenuCardList menus={MENUS} />
    </div>
  );
};

export default Menu;
