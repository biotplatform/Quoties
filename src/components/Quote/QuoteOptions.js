import React from 'react';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './Quote.css';
import {
	ShareButtons,
	ShareCounts,
	generateShareIcon
  } from 'react-share';

  const {
	FacebookShareButton
  } = ShareButtons;

const iconButtonElement = (
	<IconButton touch={true} >
		<MoreVertIcon color={grey400} />
	</IconButton>
);

function QuoteOptions(props) {

	return (
		<div>
			<IconMenu
				iconButtonElement={iconButtonElement}
				style={{ position: 'absolute', top: '10px', right: '5px' }}>
				<MenuItem
					onTouchTap={() => props.deleteQuote(props.qid)}>
					Delete
        		</MenuItem>

				<Link to={{
					pathname: '/quote',
					state: {
						quoteId: props.qid,
						quote: {
							...props.quote
						}
					}
				}} >
					<MenuItem>
						Edit
					</MenuItem>

				</Link>

				<MenuItem
					onTouchTap={() => props.toggleStarred(props.qid)}>
					{props.starred ? 'Remove from favourite' : 'Add to favourite'}
				</MenuItem>
				<MenuItem>
					<FacebookShareButton url={'https://jeremianastaziak.github.io/'} quote={props.quote.quoteText} hashtag={'#' + props.quote.quoteAuthor.replace(' ', '')}>
						Share on Facebook
					</FacebookShareButton>
				</MenuItem>
			</IconMenu>
		</div>
	)
};

export default QuoteOptions;