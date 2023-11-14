import CadPlayList from "@/components/desktop/yoursplaylist/CadPlayList";
import CardBtn from "@/components/desktop/yoursplaylist/CardBtn";
import AddFolder from "@/components/desktop/yoursplaylist/AddFolder";

export default function Palylist() {
  return (
    <div className="mx-4 pt-6">
      <h4 className="text-medium font-bold hover:font-bold mb-6 text-white">My PlayList</h4>
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-6 md:grid-cols-5">
        <div className="w-full h-40"><CardBtn /></div>
        <div className="w-full h-40"><AddFolder /></div>
        <CadPlayList />
        <CadPlayList />
        <CadPlayList />
        <CadPlayList />
        <CadPlayList />
      </div>
    </div>
  );
}
