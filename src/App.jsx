// import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Sue from './page/Sue';
import Read from './page/Read';
import SueFrom from './page/SueFrom';
import EditAppeal from './page/EditAppeal';
import EditName from './page/EditName';
import DetailAppeal from './page/DetailAppeal';
import DetailCompromise from './page/DetailCompromise';
import ComproFrom from './page/ComproFrom';
import Appeal from './page/Appeal';
import WarrantApeal from './page/WarrantApeal';
import ProsecutionAppeal from './page/ProsecutionAppeal';
import ProsecuSupremeLaw from './page/ProsecuSupremeLaw';
import ResultAppeal from './page/ResultAppeal';
import ResultSupremeLaw from './page/ResultSupremeLaw';
import ConfirmAppeal from './page/ConfirmAppeal';
import DetailEditAppeal from './page/DetailEditAppeal';
import AddEditAppeal from './page/AddEditAppeal';
import FormProsectionAppeal from './page/FormProsectionAppeal';
import FromWarrantApeal from './page/FromWarrantApeal';
import SupremeLaw from './page/SupremeLaw';
import EditSupremeLaw from './page/EditSupremeLaw';
import WarrantSupremeLaw from './page/WarrantSupremeLaw';
import DetailEditSPL from './page/DetailEditSPL';
import FromWarrantSPL from './page/FromWarrantSPL'
import WearRights from './page/WearRights';
import FromWearRights from './page/FromWearRights';
import ForcedWarrant from './page/ForcedWarrant';
import FromForcedWarrant from './page/FromForcedWarrant';
import DetailWearRights from './page/DetailWearRights';
import Mediation from './page/Mediation';
import ResultsInvestigation from './page/ResultsInvestigation';
import DetailResultInvestigation from './page/DetailResultInvestigation';
import NoFoundProperty from './page/NoFoundProperty';
import SeizePPT from './page/SeizePPT';
import DetailSeizePPT from './page/DetailSeizePPT';
import FromSeizePPT from './page/FromSeizePPT';
import WithdrawSeizePPT from './page/WithdrawSeizePPT';
import SeizeMoney from './page/SeizeMoney';
import FromSeizeMoney from './page/FromSeizeMoney';
import FromSeizeAssets from './page/FromSeizeAssets';
import CancelContract from './page/CancelContract';
import SystemWork from './page/SystemWork';
import FromConditCancel from './page/FromConditCancel';
import Compromise from './page/Compromise';
import RecordCancelFromOne from "./page/RecordCancelFromOne";
import RecordCancelContract from './page/RecordCancelContract';
import CancelContractFrom from './page/CancelContractFrom';
import RecordIncoming from "./page/RecordIncoming";
import FromSupremeLaw from './page/FromSupremeLaw';
import Auction from './page/Auction';
import PetitionProperty from './page/PetitionProperty';
import FileBankruptcy from './page/FileBankruptcy';
import DetailAuction from "./page/DetailAuction";
import FromAuction from "./page/FromAuction";
import AnnounceAuction from "./page/AnnounceAuction";
import FromAnnounceAuction from './page/FromAnnounceAuction';
import ResultsFirst from "./page/ResultsFirst";
import DetailResultFirst from './page/DetailResultFirst';
import FromResultFirst from './page/FromResultFirst';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/Sue" element={<Sue />} />
        <Route path="/page/compromise" element={<Compromise />} />
        <Route path="/page/Read" element={<Read />} />
        <Route path="/page/SueFrom" element={<SueFrom />} />
        <Route path="/page/EditName" element={<EditName />} />
        <Route path="/page/DetailCompromise" element={<DetailCompromise />} />
        <Route path="/page/ComproFrom" element={<ComproFrom />} />
        <Route path="/page/Appeal" element={<Appeal />} />
        <Route path="/page/EditAppeal" element={<EditAppeal />} />
        <Route path="/page/WarrantApeal" element={<WarrantApeal />} />
        <Route path="/page/ProsecutionAppeal" element={<ProsecutionAppeal />} />
        <Route path="/page/ResultAppeal" element={<ResultAppeal />} />
        <Route path="/page/DetailAppeal" element={<DetailAppeal />} />
        <Route path="/page/ConfirmAppeal" element={<ConfirmAppeal />} />
        <Route path="/page/DetailEditAppeal" element={<DetailEditAppeal />} />
        <Route path="/page/AddEditAppeal" element={<AddEditAppeal />} />
        <Route path="/page/FormProsectionAppeal" element={<FormProsectionAppeal />} />
        <Route path="/page/FromWarrantApeal" element={<FromWarrantApeal />} />
        <Route path="/page/SupremeLaw" element={<SupremeLaw />} />
        <Route path="/page/ResultSupremeLaw" element={<ResultSupremeLaw />} />
        <Route path="/page/EditSupremeLaw" element={<EditSupremeLaw />} />
        <Route path="/page/ProsecuSupremeLaw" element={<ProsecuSupremeLaw />} />
        <Route path="/page/WarrantSupremeLaw" element={<WarrantSupremeLaw />} />
        <Route path="/page/FromSupremeLaw" element={<FromSupremeLaw />} />
        <Route path="/page/DetailEditSPL" element={<DetailEditSPL />} />
        <Route path="/page/FromWarrantSPL" element={<FromWarrantSPL />} />
        <Route path="/page/WearRights" element={<WearRights />} />
        <Route path="/page/FromWearRights" element={<FromWearRights />} />
        <Route path="/page/ForcedWarrant" element={<ForcedWarrant />} />
        <Route path="/page/FromForcedWarrant" element={<FromForcedWarrant />} />
        <Route path="/page/DetailWearRights" element={<DetailWearRights />} />
        <Route path="/page/Mediation" element={<Mediation />} />
        <Route path="/page/ResultsInvestigation" element={<ResultsInvestigation />} />
        <Route path="/page/DetailResultInvestigation" element={<DetailResultInvestigation />} />
        <Route path="/page/NoFoundProperty" element={<NoFoundProperty />} />
        <Route path="/page/SeizePPT" element={<SeizePPT />} />
        <Route path="/page/DetailSeizePPT" element={<DetailSeizePPT />} />
        <Route path="/page/FromSeizePPT" element={<FromSeizePPT />} />
        <Route path="/page/WithdrawSeizePPT" element={<WithdrawSeizePPT />} />
        <Route path="/page/SeizeMoney" element={<SeizeMoney />} />
        <Route path="/page/FromSeizeMoney" element={<FromSeizeMoney />} />
        <Route path="/page/FromSeizeAssets" element={<FromSeizeAssets />} />
        <Route path="/page/CancelContract" element={<CancelContract />} />
        <Route path="/page/SystemWork" element={<SystemWork />} />
        <Route path="/page/FromConditCancel" element={<FromConditCancel />} />
        <Route path="/page/RecordCancelContract" element={<RecordCancelContract />} />
        <Route path="/page/CancelContractFrom" element={<CancelContractFrom />} />
        <Route path="/page/RecordCancelFromOne" element={<RecordCancelFromOne />} />
        <Route path="/page/RecordIncoming" element={<RecordIncoming />} />
        <Route path="/page/Auction" element={<Auction />} />
        <Route path="/page/PetitionProperty" element={<PetitionProperty />} />
        <Route path="/page/FileBankruptcy" element={<FileBankruptcy />} />
        <Route path="/page/DetailAuction" element={<DetailAuction />} />
        <Route path="/page/FromAuction" element={<FromAuction />} />
        <Route path="/page/AnnounceAuction" element={<AnnounceAuction />} />
        <Route path="/page/FromAnnounceAuction" element={<FromAnnounceAuction />} />
        <Route path="/page/ResultsFirst" element={<ResultsFirst />} />
        <Route path="/page/DetailResultFirst" element={<DetailResultFirst />} />
        <Route path="/page/FromResultFirst" element={<FromResultFirst />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
