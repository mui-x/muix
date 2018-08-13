import React from 'react';
import { classNamesStr, classNames } from 'reactxx-basic';
import PropTypes from 'prop-types';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles';
import classnames from 'classnames';
import Card from 'reactxx-muix/current/Card/Card';
import CardHeader from 'reactxx-muix/current/CardHeader/CardHeader';
import CardMedia from 'reactxx-muix/current/CardMedia/CardMedia';
import CardContent from 'reactxx-muix/current/CardContent/CardContent';
import CardActions from 'reactxx-muix/current/CardActions/CardActions';
import Collapse from 'reactxx-muix/current/Collapse/Collapse';
import Avatar from 'reactxx-muix/current/Avatar/Avatar';
import IconButton from 'reactxx-muix/current/IconButton/IconButton';
import Typography from 'reactxx-muix/current/Typography/Typography';
import red from 'reactxx-mui-web/colors/red';
import FavoriteIcon from 'reactxx-icons/Favorite';
import ShareIcon from 'reactxx-icons/Share';
import ExpandMoreIcon from 'reactxx-icons/ExpandMore';
import MoreVertIcon from 'reactxx-icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component<any, any> {
  state: any = {
    expanded: false
  };
  handleExpandClick = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const {
      classes
    } = this.props;
    return <div>
        <Card className={classNames(classes.card)}>
          <CardHeader avatar={<Avatar aria-label="Recipe" className={classNames(classes.avatar)}>
                R
              </Avatar>} action={<IconButton>
                <MoreVertIcon />
              </IconButton>} title="Shrimp and Chorizo Paella" subheader="September 14, 2016" />
          <CardMedia className={classNames(classes.media)} image="src/ks/common/muix/static/images/cards/paella.jpg" title="Contemplative Reptile" />
          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classNames(classes.actions)} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton className={classNames(classnames(classes.expand, {
            [classes.expandOpen]: this.state.expanded
          }))} onClick={this.handleExpandClick} aria-expanded={this.state.expanded} aria-label="Show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>;
  }

}

RecipeReviewCard['propTypes'] = {
  classes: PropTypes.object.isRequired
};
export default withStylesCreator((styles as any), RecipeReviewCard)();