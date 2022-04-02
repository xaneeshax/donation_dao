import React from "react";
import Image from "next/image";

const OrgIcon = ({ organization }) => {
    const { img, name, address } = organization;

    return (
        <article className="organization">
            <img src={img} alt="" width={256} height={256} />
            <h2>{name}</h2>
            <h4>{address}</h4>
        </article>
    );
};

export default OrgIcon;
