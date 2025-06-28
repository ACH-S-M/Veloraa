
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { ShoppingCart } from "lucide-react";

export function ModalProduk({ show, onClose }: { show: boolean, onClose: () => void }) {
    return (
      <Modal dismissible show={show} onClose={onClose}>
        <ModalHeader className="bg-blue-400">Produk Ditambahkan</ModalHeader>
        <ModalBody className="bg-white border-0 flex  ">

          <div className="text-base text-black flex  items-center gap-8">
          <ShoppingCart className="size-16" />
                <p>   Produk berhasil ditambahkan ke keranjang!</p>
          </div>

        </ModalBody>
        <ModalFooter className="bg-white ">
          <Button onClick={onClose}>Tutup</Button>
        </ModalFooter>
      </Modal>
    );
  }
