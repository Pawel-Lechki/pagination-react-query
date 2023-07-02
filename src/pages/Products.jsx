import React, {useState} from 'react';
import ProdactList from "../components/ProdactList.jsx";
import Pagination from "../components/Pagination.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import {useQuery} from "@tanstack/react-query";
import {getProductList} from "../services/api.jsx";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const {isLoading, isError, error, data, isFetching, isPreviousData} = useQuery({
        queryKey: ['posts', currentPage],
        queryFn: () => getProductList(currentPage),
        keepPreviousData: true
    });
    console.log(data);
    const products = [
        {id: 1, title: 'this is post one', body: 'this is body one'},
        {id: 2, title: 'this is post two', body: 'this is body two'},
        {id: 3, title: 'this is post three', body: 'this is body three'},
        {id: 4, title: 'this is post four', body: 'this is body four'},
    ];

    if(isLoading) return 'Loading';
    if(isError) return `Error: ${error.message}`;

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-2xl my-5 underline font-bold">Pagination</h1>
            <ProdactList prodacts={data.products} />
            <div className="flex item-center justify-between my-5">
                <Pagination
                    currentPage={currentPage}
                    totalItems={data.totalData}
                    onPageChange={(page)=>setCurrentPage(page)}
                    isPreviousData={isPreviousData}
                />
                {isFetching ?? <LoadingSpinner />}
            </div>
        </div>
    );
};

export default Products;