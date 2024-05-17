import TicketCard from "./(components)/TicketCard";
import { capitalize } from "@/utils";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store", // dont store data
    });

    return res.json();
  } catch (error) {
    console.log("Faild to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCatagories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5 ">
      <div>
        {tickets &&
          uniqueCatagories?.map((uniqueCatagory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{capitalize(uniqueCatagory)}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCatagory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
