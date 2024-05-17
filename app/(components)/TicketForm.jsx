"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    category: "design",
    status: "Not started",
    tags: [],
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["category"] = ticket.category;
    startingTicketData["status"] = ticket.status;
    startingTicketData["tags"] = ticket.tags;
  }

  const [formData, setFormData] = useState(startingTicketData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedTags = checked
      ? [...formData.tags, value]
      : formData.tags.filter((tag) => tag !== value);

    setFormData({
      ...formData,
      tags: updatedTags,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(
        `http://localhost:3000/api/Tickets/${ticket._id}`,
        {
          method: "PUT",
          body: JSON.stringify({ formData }),
          "content-type": "application/json",
        }
      );

      if (!res.ok) {
        throw new Error("Faild to update Ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Faild to create Ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update Your Ticket" : "Create New Ticket"}</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />

        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="design">Design</option>
          <option value="database">Database</option>
          <option value="testing">Testing</option>
          <option value="development">Development</option>
          <option value="software">Software</option>
          <option value="hardware">Hardware</option>
          <option value="network">Network</option>
          <option value="security">Security</option>
          <option value="infrastructure">Infrastructure</option>
        </select>

        <label>Priority</label>
        <div className="m-1 rounded bg-card p-1">
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
            required={true}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
            required={true}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
            required={true}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
            required={true}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
            required={true}
          />
          <label>5</label>
        </div>

        <label>Progress</label>
        <div className="rounded bg-card flex justify-center">
          <input
            id="progress"
            name="progress"
            type="range"
            value={formData.progress}
            min={0}
            max={100}
            onChange={handleChange}
            className="w-11/12"
          />
        </div>

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
          <option value="pending">Pending</option>
          <option value="reopened">Reopened</option>
        </select>

        <label>Tags</label>
        <div className="flex flex-wrap justify-evenly m-1 rounded bg-card p-1">
          {[
            "Bug",
            "Web",
            "API",
            "UI",
            "UX",
            "Feature",
            "Task",
            "Component",
            "Performance",
            "Security",
            "Configuration",
            "Improvement",
          ].map((tag) => (
            <div key={tag} className="m-1 rounded bg-card p-1">
              <label>
                <input
                  type="checkbox"
                  value={tag}
                  checked={formData.tags.includes(tag)}
                  onChange={handleCheckboxChange}
                />
                {tag}
              </label>
            </div>
          ))}
        </div>

        <input
          type="submit"
          className="btn"
          value={EDITMODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
