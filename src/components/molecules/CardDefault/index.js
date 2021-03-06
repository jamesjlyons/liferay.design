import { withPrefix, Link } from 'gatsby'
import React from 'react'
import styles from './styles.module.scss'
import { Icon,Text } from 'components/atoms'
import PropTypes from 'prop-types'
import { Avatar, Card, CardTitle, CardText, Media } from 'react-md'

const CardDefault = ({
	key,
	imageURL,
	icon,
	title,
	subtitle,
	link,
	avatarImage,
	avatarImageURL,
	pill,
	tag,
}) => (
	<Link key={key} className={styles.cardLink} to={link}>
		<Card className={styles.card}>
			<Media aspectRatio="4-3" className={styles.null}>
				<img src={withPrefix(`${imageURL}`)} />
			</Media>
			{pill ? (
				<Text className={styles.pill} weight="black">{tag}</Text>
			) : null}
			{avatarImage ? (
				<Avatar className={styles.avatar} src={withPrefix(`${avatarImageURL}`)} />
			) : (
				<Avatar
					className={styles.avatar}
					icon={<Icon fill="white" height="2rem" width="2rem" name={icon} />}
				/>
			)}
			<div className={styles.copy}>
				<CardTitle className={styles.title} title={title} />
				<CardText className={styles.text}>{subtitle}</CardText>
			</div>
		</Card>
	</Link>
)

CardDefault.propTypes = {
	key: PropTypes.string,
	imageURL: PropTypes.string,
	avatarImageURL: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	link: PropTypes.string,
	pill: PropTypes.string,
	tag: PropTypes.string,
}

export default CardDefault
