import UpcomingSchedule from "@/components/dashboard/aside-calendar";
import { Proposal_Board } from "@/components/dashboard/proposal";

export default function Home() {
  return (
    <div className="grid grid-cols-6 bg-gray-200 h-screen overflow-hidden">
      <aside className="col-span-1 bg-blue-200 overflow-y-auto">
        <h1>Aside</h1>
      </aside>

      <main className="col-span-5 my-15 ml-5 grid grid-cols-10 bg-gray-200 h-full overflow-hidden">
        <section className="col-span-7 overflow-y-auto">
          <div className="">
            <Proposal_Board />
          </div>
        </section>
        <section className="col-span-3 bg-gray-200 overflow-y-auto border-l ">
          <div className="mx-8 mt-30">
            <UpcomingSchedule />
          </div>
        </section>
      </main>
    </div>
  );
}
