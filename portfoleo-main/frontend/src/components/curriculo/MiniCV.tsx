import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/minha-foto.png" alt="Foto de perfil" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Leonardo Leitão
					</span>
					<span>CTO da Cod3r Ensino e Consultoria</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Mestre em Informática Aplicada e fundador da Cod3r, já treinou mais de 420.000
					alunos. São mais de 16 anos como professor. Há 20 anos atua na área como
					desenvolvedor de softwares e trabalhou como arquiteto de software em grandes
					projetos para o Governo Federal.
				</p>
			</div>
		</div>
	)
}
