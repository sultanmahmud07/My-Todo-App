"use client";
import React, { useState } from "react";
import TaskModal from "./TaskModal";
import { Plus } from "lucide-react";

export default function OpenModalButton() {
      const [openModal, setOpenModal] = useState(false);

      return (
            <div className="">
                     <button
                              onClick={() => setOpenModal(true)} className="px-4 flex items-center gap-2 p-2 rounded-lg bg-[#5272FF] text-white font-medium ml-auto">
                              <Plus /> New Task
                        </button>

                  {/* Modal */}
                  <TaskModal open={openModal} onClose={() => setOpenModal(false)} />
            </div>
      );
}
