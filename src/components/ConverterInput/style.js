export const style = {
  field: {
    '& .MuiOutlinedInput-root': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#C4C4C4'
      }
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C4C4C4'
    }
  },

  select: {
    // marginLeft: '-1px',
    width: '100px',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C4C4C4'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#C4C4C4'
    }
  }
}