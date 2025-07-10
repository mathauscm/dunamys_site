import React from "react";

const SuperClasse = () => {
  const modulos = [
    { titulo: "IDENTIDADE CRISTÃ", imagem: "/modulos/identidade.jpg" },
    { titulo: "FÉ: EMPODERANDO SUA FÉ!", imagem: "/modulos/fe.jpg" },
    { titulo: "DOUTRINAS DA BÍBLIA", imagem: "/modulos/doutrinas.jpg" },
    { titulo: "ESCATOLOGIA", imagem: "/modulos/escatologia.jpg" },
    { titulo: "DIREÇÃO ESPIRITUAL", imagem: "/modulos/direcao.jpg" },
    // Adicione os outros módulos aqui...
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero com imagem de fundo centralizada e opaca */}
      <div className="relative flex items-center justify-center h-[500px] bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/superclasse.png" 
            alt="Super Classe" 
            className="w-full h-auto object-cover" 
          />
        </div>
        <div className="relative z-10 text-center px-4">
        </div>
      </div>

      {/* Seção de Módulos */}
      <div className="bg-[#1a1a1a] py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">20 MÓDULOS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {modulos.map((modulo, index) => (
            <div
              key={index}
              className="relative h-40 sm:h-48 md:h-56 lg:h-64 bg-center bg-cover flex items-center justify-center group overflow-hidden"
              style={{ backgroundImage: `url(${modulo.imagem})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300" />
              <span className="z-10 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white text-center px-2 drop-shadow-md">
                {modulo.titulo}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chamada para ação */}
      <div className="bg-gradient-to-r from-dunamys-700 to-dunamys-900 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Faça Parte da Super Classe</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Junte-se a nós e experimente um novo nível de crescimento espiritual e conhecimento bíblico.
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Matricule-se Já!
        </button>
      </div>
    </div>
  );
};

export default SuperClasse;
