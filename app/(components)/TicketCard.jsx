import React from "react";
import DeleteBlock from "./Deleteblock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import TagDisplay from "./TagDisplay";
import { formationTimestamp } from "@/utils";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const dateString = ticket.createdAt;

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{ display: "contents" }}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" />
        <p className="whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-3 ml-auto text-sx">
          <TagDisplay tags={ticket.tags} />
        </div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-sx my-1">{`Date: ${formationTimestamp(
              dateString
            )}`}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
