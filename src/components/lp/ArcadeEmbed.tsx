export function ArcadeEmbed() {
	return (
		<div
			style={{
				position: "relative",
				paddingBottom: "calc(62.5% + 41px)",
				height: 0,
				width: "100%",
			}}
		>
			<iframe
				src="https://demo.arcade.software/PtaLpcyDVkJKEDwSVU3o?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
				title="http://localhost:3000/os/demo"
				frameBorder="0"
				loading="lazy"
				allowFullScreen
				allow="clipboard-write"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					colorScheme: "light",
				}}
			/>
		</div>
	);
}
