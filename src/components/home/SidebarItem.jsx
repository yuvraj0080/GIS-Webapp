import React from 'react'
import { Button } from '../ui/button';

const SidebarItem = ({name }) => {
    return (
        <Button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            {name}
        </Button>
    );
}

export default SidebarItem