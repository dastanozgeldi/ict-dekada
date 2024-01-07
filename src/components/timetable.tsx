import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Event } from "@/types";
import timetable from "../timetable.json";

export const Timetable = () => {
  return (
    <section id="timetable" className="py-6">
      <div className="mb-6">
        <h1 className="text-3xl my-2 md:text-4xl font-bold">Расписание</h1>
        <hr className="border-0 max-w-[36px] h-[6px] bg-[#536DFE]" />
      </div>

      <Table>
        <TableCaption>Расписание мероприятий со временем может поменяться.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Название</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead>Время</TableHead>
            <TableHead>Место</TableHead>
            <TableHead>Участники</TableHead>
            <TableHead>Ответственные</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timetable.map((event: Event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.time}</TableCell>
              <TableCell>{event.place}</TableCell>
              <TableCell>{event.participants}</TableCell>
              <TableCell>{event.responsible}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};
