import CrbtBanner from '@/components/desktop/crbt/Banner'
import CrbtTag from '@/components/desktop/crbt/CrbtTag'
import Crbtlist from '@/components/desktop/crbt/Crbtlist'

export default function Crbt() {
  return (
    <div className="drop-shadow-xl">
      <div className="">
        <div className="mb-4">
          <CrbtBanner />
          <CrbtTag />
          <Crbtlist />
        </div>
      </div>
    </div>
  );
}
