import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import { useState } from "react";
import useCabins from "../features/cabins/useCabins";

function Cabins() {
    const [showForm, setShowForm] = useState(false);
    const { isLoading } = useCabins();
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>Filter / Sort</p>
            </Row>
            <Row>
                <CabinTable />
                {!isLoading && (
                    <Button onClick={() => setShowForm(!showForm)}>
                        {showForm ? "Close" : "Add new cabin"}
                    </Button>
                )}
                {showForm && <CreateCabinForm />}
            </Row>
        </>
    );
}

export default Cabins;
