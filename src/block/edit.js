import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';
import { useEffect, useRef } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames('cover-video'),
	});
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const delegate = ".cover-video-preview";
		if (window.Fancybox && container) {
			const fancybox = window.Fancybox.bind('[data-fancybox="gallery"]', {
				// Your custom options
			});
			console.log(fancybox);
			return () => {
				window.Fancybox.unbind(container);
				window.Fancybox.close();
			};
		}
	});
	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<div {...blockProps}>
				<div ref={containerRef}>
					<a
						data-fancybox="gallery"
						data-src="https://lipsum.app/id/2/1024x768"
						data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
					>
						<img src="https://lipsum.app/id/2/200x150" />
					</a>
					<a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
						<img src="https://lipsum.app/id/3/200x150" />
					</a>

					<a data-fancybox="gallery" data-src="https://lipsum.app/id/4/1024x768">
						<img src="https://lipsum.app/id/4/200x150" />
					</a>
				</div>
			</div>
		</>
	)
}
