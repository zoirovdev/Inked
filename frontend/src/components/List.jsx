import React, { useEffect } from "react";
import Card from "./Card";

const List = ({ links, setLinks }) => {

    const getAllLinks = async () => {
        const url = "http://127.0.0.1:5000/api/links"

        const response = await fetch(url)

        if (!response.ok)
            throw new Error(`Status: ${response.status}`)

        const json = await response.json()
        setLinks(json)
    }

    useEffect(() => {
        getAllLinks()
    }, [])


    return (
        <div className="grid grid-cols-3 gap-2 mt-1 pl-2 pr-6 w-full mb-8">
        {links.map((link) => (
            <Card link={link} key={link.id} links={links} setLinks={setLinks} />
        ))}
        </div>
    );
};

export default List;
