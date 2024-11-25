import React from "react";
import Card from "./Card";

const List = ({ links, setLinks }) => {
    return (
        <div className="grid grid-cols-3 gap-2 mt-2 pl-2 pr-6 pt-4 w-full mb-8">
        {links.map((link, index) => (
            <Card link={link} key={index} links={links} setLinks={setLinks} />
        ))}
        </div>
    );
};

export default List;
